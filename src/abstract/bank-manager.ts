import { BankEmployeeAbstract } from './bank-employee-abstract';
class BankManager extends BankEmployeeAbstract {
    isManager(): boolean {
        return true;
    }
}