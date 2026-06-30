import XLSX from 'xlsx'

export class ExcelWriter {
     static writeData(){

        const credentials = [
            {
                Username: "standard_user",
                Password: "secret_sauce"
            },
            {
                Username: "locked_out_user",
                Password: "secret_sauce"
            },
             {
                Username: "problem_user",
                Password: "secret_sauce"
            }

        ]


        const worksheet = XLSX.utils.json_to_sheet(credentials)

        const workbook = XLSX.utils.book_new()

        XLSX.utils.book_append_sheet(
            workbook,worksheet, "Credentials"
        )

        XLSX.writeFile(workbook, "testData.xlsx")


     }
}