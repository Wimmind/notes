const BASEURL = 'https://worldtimeapi.org/api/timezone'

export class Request {

  baseRequest = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data
  };

  getTimeZones = async () => {
    return await this.baseRequest(BASEURL);
  };

  getTimeZoneInfo = async (param: string) => {
    return await this.baseRequest(BASEURL + param);
  };

}
export default Request;