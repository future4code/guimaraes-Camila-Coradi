import { v4 } from "uuid"

class IdGenerator {
    generateId = () => {
        return v4()
    }
}

export default new IdGenerator()