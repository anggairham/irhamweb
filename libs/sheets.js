// https://kierandixon.com/convert-google-sheets-database-to-array-of-objects/
import { google } from "googleapis";
export async function getSheet() {
  try {
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      target
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "reference", // sheet name
    });
    const headers = response.data.values[0];
    const values = response.data.values;
    const databaseAsObjectArray = [];

    for (let i = 1; i < values.length; i++) {
      const entry = {};
      for (let j = 0; j < headers.length; j++) {
        const key = headers[j];
        if (key === "") continue;
        entry[key] = values[i][j] === undefined ? "" : values[i][j];
      }
      databaseAsObjectArray.push(entry);
    }
    // console.log(databaseAsObjectArray);
    return databaseAsObjectArray;
    // console.log(response);

    // const rows = response.data.values;
    // const rows = response.data.values;
    // console.log(rows);
    // return rows;
    // if (rows.length) {
    //   return rows.map((row) => ({
    //     title: row[0],
    //   }));
    // }
  } catch (err) {
    console.log(err);
  }
  return [];
}
