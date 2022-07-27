import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const rapydWebhook = functions.https.onRequest(async (req, res) => {
  try {
    const transaction = {
      issuing_id: req.body.data.issued_account_id,
      amount: req.body.data.amount,
      ...req.body,
    };
    await admin.firestore().collection("transactions").add(transaction);
    functions.logger.info("Transaction!", transaction);
  } catch (error) {
    functions.logger.error("Error:", error);
    functions.logger.debug("Body:", req.body);
  }
  res.send("{}");
});
