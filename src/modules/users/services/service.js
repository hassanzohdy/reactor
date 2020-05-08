import RestfulEndpoint from "reactor/restful-endpoint";

class UsersService extends RestfulEndpoint {
    route = '/users';
}

export default new UsersService();