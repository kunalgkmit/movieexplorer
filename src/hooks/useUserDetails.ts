import { useQuery } from "@tanstack/react-query";

import { fetchUserDetails } from "@services/userProfile.service";

export const useUserDetails = ()=> useQuery({
    queryKey: ["UserDetails"],
    queryFn: fetchUserDetails,
})