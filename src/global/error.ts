import { BadRequestException, NotFoundException, UnauthorizedException } from "@nestjs/common"

const _400 = (error) => {
    return new BadRequestException(error)
}

const _401 = (error) => {
    return new UnauthorizedException(error)
}

const _404 = (error) => {
    return new NotFoundException(error)
}

export { _400, _401, _404 };