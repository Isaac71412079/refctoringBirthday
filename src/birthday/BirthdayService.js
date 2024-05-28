import fs from "fs";
import path from "path";
import { Employee } from "./Employee";
import { EmployeesRepository } from "./EmployeesRepository";

export class BirthdayService {
  constructor() {}

  sendGreetings(ourDate, fileName, smtpUrl, smtpPort, transport) {
    let employeesRepository = new EmployeesRepository();
    const employees= employeesRepository.getEmployeesFromFile(ourDate,fileName);
    
    employees.forEach((employee) => {
      const message = {
        host: smtpUrl,
        port: smtpPort,
        from: "sender@here.com",
        to: [employee.getEmail()],
        subject: "Happy Birthday!",
        text: `Happy Birthday, dear ${employee.getFirstName()}!`,
      };
      transport.sendMail(message);
    });
  }

}
