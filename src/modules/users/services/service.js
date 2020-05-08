import RestfulEndpoint from "core/restful-endpoint";

class UsersService extends RestfulEndpoint {
    route = '/users';
}

export default new UsersService();