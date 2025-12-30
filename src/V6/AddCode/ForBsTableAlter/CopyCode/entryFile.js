import { StartFunc as StartFuncRowDataFromGet } from "./RowDataFromGet/Entry.js";

const jVarCommonFieldAlterName = "KS-Alter";

const StartFunc = async (row, $element, field) => {

    if (field === jVarCommonFieldAlterName) {
        const myModal = new bootstrap.Modal('#AlterModal', {
            backdrop: 'static',   // prevent close on outside click
            keyboard: false       // prevent close on ESC
        });

        myModal.show();
        StartFuncRowDataFromGet({ inGetKey: row.pk });

        // StartFuncNav({ inRowpk: row.pk });
    };
};

export { StartFunc };
