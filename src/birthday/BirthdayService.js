import { EmployeesRepository } from "./EmployeesRepository";

export class BirthdayService {
  constructor() {}

  sendGreetings(ourDate, fileName, smtpUrl, smtpPort, transport) {
    let employeesRepository = new EmployeesRepository();
    const employees= employeesRepository.getEmployeesFromFile(ourDate,fileName);
    this.sendBirthdayMessage(employees,smtpUrl, smtpPort, transport);
  }

  sendBirthdayMessage(employees,smtpUrl, smtpPort, transport){
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
