import { EmployeesRepository } from "./EmployeesRepository";
import { GreetingDelivery } from "./GreetingDelivery";

export class BirthdayService {
  constructor() {}

  sendGreetings(ourDate, fileName, smtpUrl, smtpPort, transport) {
    let employeesRepository = new EmployeesRepository();
    const employees= employeesRepository.getEmployeesFromFile(ourDate,fileName);
    let greetingDelivery=new GreetingDelivery();
    employees.forEach(employee => {
      greetingDelivery.sendBirthdayMessage(employee,smtpUrl, smtpPort, transport);
    });
  }

}
