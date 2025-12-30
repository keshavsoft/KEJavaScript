import UrlJson from './url.json' with {type: 'json'};
import commonConfig from '../../../../../../../../Config.json' with {type: 'json'};

let StartFunc = async ({inGetKey}) => {
    let jVarLocalFilterString = inGetKey

    let jVarTableName = commonConfig.TableName;

    let jVarLoclRowDataUrl = UrlJson.RowDataUrl;

    let jVarLocalFetchUrl = `${jVarTableName}/${jVarLoclRowDataUrl}/${jVarLocalFilterString}`;

    let response = await fetch(jVarLocalFetchUrl);

    return response;
};

export { StartFunc };