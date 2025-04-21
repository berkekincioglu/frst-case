/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
import * as admin from 'firebase-admin';
import { v4 as uuidv4 } from 'uuid';

// Initialize the Admin SDK once
admin.initializeApp();
const db = admin.firestore();

// Start writing functions
//firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((_request, response) => {
  logger.info('Hello logs!', { structuredData: true });
  // check if user authenticated

  response.send(`Hello from Firebase! does not work at all`);
});

// get logo styles
export const getLogoStyles = onRequest(async (request, response) => {
  logger.info('getLogoStyles', { structuredData: true });
  // // check if user authenticated
  // const styles = [
  //   { key: 'style1', label: 'Style 1', icon: 'icon1' },
  //   { key: 'style2', label: 'Style 2', icon: 'icon2' },
  //   { key: 'style3', label: 'Style 3', icon: 'icon3' },
  // ];
  // response.send(styles);

  const stylesCol = db.collection('logoStyles');
  const snapshot = await stylesCol.get();
  let styles = snapshot.docs.map(doc => doc.data());

  // 4) If none exist, seed with your mock data
  if (styles.length === 0) {
    const mock = [
      { key: 'style1', label: 'No Style', url: 'no-logo' },
      { key: 'style2', label: 'Monogram', url: 'monogram' },
      { key: 'style3', label: 'Abstract', url: 'abstract' },
      { key: 'style4', label: 'Mascot', url: 'mascot' },
    ];
    const batch = db.batch();
    mock.forEach(style => {
      const docRef = stylesCol.doc(style.key);
      batch.set(docRef, style);
    });
    await batch.commit();
    styles = mock;
    logger.info('Seeded mock styles into Firestore');
  }

  response.status(200).json(styles);
});

export const generateLogo = onRequest(async (request, response) => {
  logger.info('generateLogo called');

  // uncomment to test error handling
  // throw new Error('This function is not implemented yet');
  // Only allow POST
  if (request.method !== 'POST') {
    response.status(405).send('Method Not Allowed');
    return; // <— no value, just exit
  }

  const { prompt, style } = request.body as {
    prompt?: string;
    style?: string;
  };

  if (typeof prompt !== 'string' || typeof style !== 'string') {
    response.status(400).send('Missing prompt or style in request body');
    return;
  }

  // Random delay
   const delayMs = 30_000 + Math.floor(Math.random() * 30_000);
  //const delayMs = 5000;
  logger.info(`Waiting ${delayMs}ms to simulate generation`);
  await new Promise(r => setTimeout(r, delayMs));

  // Build payload
  const id = uuidv4();
  const imageUrl = `https://images.unsplash.com/photo-1531214159280-079b95d26139?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
  const payload = { id, prompt, style, imageUrl };

  logger.info('generateLogo response', payload);
  response.status(200).json(payload);
  // no return needed here either
});
