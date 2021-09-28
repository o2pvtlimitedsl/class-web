import { environment } from "src/environments/environment";

export class ApiEndpoints {
    public static readonly BASE_URL: string = environment.baseUrl;

    public static readonly REFRESH_TOKEN_URL: string = ApiEndpoints.BASE_URL + 'refresh/token';
    public static readonly TEST_API: string ="https://gorest.co.in/public/v1/posts"
}
