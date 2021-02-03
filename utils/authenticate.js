import passport from "passport";
import { UserRefreshToken } from "../models/user-refresh-token";



export function SkeinAuthentication(req, res, next) {

    passport.authenticate('skein', async function (err, user, info) {



        try {

            if (user) {
                req.user = user
                if (req.user.provider == req.params.type) {
                    res.cookie('jwt', req.user.token)
                } else if (req.user.provider == 'firebase') {
                    res.cookie('firebase', req.user.token)
                }

                delete req.user.token

                console.log(user)

                const refreshTokens = await UserRefreshToken.findAll({ user: user.id });

                req.user.ownsToken = token => !!refreshTokens.find(x => x.token === token);

                next()
            } else {
                res.send({
                    status: false,
                    message: "Invalid token !",
                    error: err
                })
            }
        }
        catch (err) {
            res.send({
                status: false,
                message: "Unauthorized !"
            })
        }

    })(req, res, next);

}



// import Sequelize from "sequelize";
// import { sequelize } from "../utils/database";
// import { User } from "./user";

// export const UserRefreshToken = sequelize.define('sp_user_refresh_tokens', {
//   id: {
//     type: Sequelize.INTEGER(10),
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   user_id: {
//     type: Sequelize.INTEGER(10),
//     allowNull: false,
//     references: {
//       model: User,
//       key: 'id'
//     }
//   },
//   token: {
//     type: Sequelize.STRING(255),
//     allowNull: false
//   },
//   expires: {
//     type: Sequelize.DATE,
//     allowNull: false
//   },
//   createdByIp: {
//     type: Sequelize.STRING(255),
//     allowNull: true
//   },
//   revoked: {
//     type: Sequelize.DATE,
//     allowNull: true
//   },
//   revokedByIp: {
//     type: Sequelize.STRING(255),
//     allowNull: true
//   },
//   replacedByToken: {
//     type: Sequelize.STRING(255),
//     allowNull: true
//   },
//   createdAt: {
//     type: Sequelize.DATE,
//     allowNull: true
//   },
//   updatedAt: {
//     type: Sequelize.DATE,
//     allowNull: true
//   },
// },
//   {
//     freezeTableName: true,
//     tableName: 'sp_user_refresh_tokens'
//   })

