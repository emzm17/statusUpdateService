import { Submission } from '../models/submission.js';

export async function updateSubmission(submissionid, newStatus, newResult) {
  try {
    const [updatedRowsCount] = await Submission.update(
      { status: newStatus, result: newResult },
      { where: { id: submissionid } }
    );

    if (updatedRowsCount === 0) {
      console.log('No submission found with the specified ID.');
    } else {
      console.log('Submission updated successfully.');
    }
  } catch (error) {
    console.error('Error updating submission:', error);
  }
}


