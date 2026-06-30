import XLXS from 'xlsx'

export class ExcelReader{

    static getData(sheetName: string) {

        const workbook = XLXS.readFile('./data/testData.xlsx')

        const worksheet = workbook.Sheets[sheetName]

        const data = XLXS.utils.sheet_to_json(worksheet)

        return data

    }



}