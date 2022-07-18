const BASEURL = 'https://worldtimeapi.org/api/timezone/'

export class Request {

  private baseRequest = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data
    } catch (e) {
      console.error(e)
      return
    }
  };

  getTimeZones = async () => {
    return await this.baseRequest(BASEURL);
  };

  getTimeZoneInfo = async (param: string) => {
    return await this.baseRequest(BASEURL + param);
  };

}
export default Request;