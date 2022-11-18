import { BankEmployeeAbstract } from './bank-employee-abstract';
class BankEmployee extends BankEmployeeAbstract {
    isManager(): boolean {
        return false
    }
    
}