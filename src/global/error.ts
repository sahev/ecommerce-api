import { BadRequestException, UnauthorizedException } from "@nestjs/common"

function _400(error) {
    return new BadRequestException(error)
}

function _401(error) {
    return new UnauthorizedException(error)
}

export { _400, _401 };