import getUrlJson from './getUrl.json' with {type: 'json'};
import CommonConfig from '../../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint;
    let jVarLocalVersion = CommonConfig.TableName.split("/")[1]

    let jVarLocalFetchUrl = `/${jVarLocalVersion}/AccountNames/${jVarLocalGetEndPoint}`

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };