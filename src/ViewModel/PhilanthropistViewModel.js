import Philanthropist from "../Model/Philanthropist";
import PhilanthropistService from "../Service/PhilanthropistService";


class PhilanthropistViewModel {
    async savePhilanthropist(email, password, firstName, lastName, phoneNumber, totalDonation) {
        try {
            const philanthropist = new Philanthropist(email, password, firstName, lastName, phoneNumber, totalDonation);
            const result = await PhilanthropistService.savePhilanthropist(philanthropist);
            return result;
        } catch (error) {
            console.error('Error saving philanthropist:', error);
            throw error;
        }
    }
}
export default PhilanthropistViewModel;