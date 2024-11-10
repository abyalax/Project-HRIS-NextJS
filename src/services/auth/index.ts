import Instance from "@/lib/axios";

const authServices = {
    registerAccount : (data: adminType) => Instance.post('/api/user/register', data)
}

export default authServices
