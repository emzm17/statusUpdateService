import { updateSubmission } from "../repository/submissionRepository.js";

export const update = async (id, status, result) => {
    return await updateSubmission(id, status, result);
}