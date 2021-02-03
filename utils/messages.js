/**
 * @author Padmanaban
 * @email padmanaban.r@skeintech.com
 * @create date 2021-01-11 12:57:24
 * @modify date 2021-01-30 17:54:28
 * @desc [description]
 */

module.exports.Message = {
    UserManagement: {
        SuccessMessage: {
            Create: "User created successfully !",
            Update: "User updated successfully !",
            Delete: "User deleted successfully !",
            Login: "Login successfull !",
            Fetch: "Users fetched !",

        },
        FailureMessage: {
            Create: "User creation failed, kindly retry !",
            Update: "User updation failed, kindly retry !",
            Delete: "User deletion failed, kindly retry !",
            Login: "Login failed !",
            NotFound: "User not found !",
        }
    },
    UserRole: {
        SuccessMessage: {
            Create: "Role created successfully !",
            Update: "Role updated successfully !",
            Delete: "Role deleted successfully !",
            Login: "Login successfull !",
            Fetch: "Roles fetched !",

        },
        FailureMessage: {
            Create: "Role creation failed, kindly retry !",
            Update: "Role updation failed, kindly retry !",
            Delete: "Role deletion failed, kindly retry !",
            Login: "Login failed !",
            NotFound: "Roles not found !",
            InvalidId: "Invalid role id"
        }
    },
    Token: {
        SuccessMessage: {
            RevokeToken: "Token revoked",
        },
        FailureMessage: {
            RevokeToken: "Token revoke failed !",
            Config: "Token configuration error !",
            RefreshToken: "Refresh token generation failed !"
        }
    },



    Transaction: {
        SuccessMessage: {
            Success: "Transaction success !",
            Initiated: "Transaction initiated !",
            Fetch: "Transaction fetched !"
        },
        FailureMessage: {
            Failed: "Transaction failed !",
            InvAmount: "Invalid Amount",
            Initiation: "Transaction initiation failed !",
            NoTrx: "No transaction found"
        }
    },
    Common: {
        SuccessMessage: {
            Fetch(data = 'Data') { return `${data} fetched successfully !` },

            Creation(data = 'Data') { return `${data} created successfully !` },
            Updation(data = 'Data') { return `${data} updated successfully !` },
            Deletion(data = 'Data') { return `${data} updated successfully !` },
        },
        FailureMessage: {
            Fetch(data = 'Data') { return `${data} fetch failed, kindly retry !! ` },

            Creation(data = 'Data') { return `${data} creation failed, kindly retry !!` },
            Updation(data = 'Data') { return `${data} updation failed, kindly retry !!` },
            Deletion(data = 'Data') { return `${data} deletion failed, kindly retry !!` },
            NoData: "No data found !",
            SomethingWnWrng: "Something went wrong we are trying to fix it. Please try again later !",
            TokenExpired: "Token expired !",
            InternalServerError: "Internal server error. Please try again later !",
            RowRefNotFound: "Reference not found please check and try again !",
            DataAlreadyExists: "Data already exists !",
            NoAccessToDelete: "No access to delete !",
            InvalidRef: "Invalid reference please check and try again !"

        }
    },


    VendingMachine: {
        SuccessMessage: {
            Create: "Vending machine created successfully !",
            Update: "Vending machine updated successfully !",
            Delete: "Vending machine deleted successfully !",
            Fetch: "Vending machines fetched successfully !"

        },
        FailureMessage: {
            Create: "Vending machine creation failed, kindly retry !",
            Update: "Vending machine updation failed, kindly retry !",
            Delete: "Vending machine deletion failed, kindly retry !",
            NotFound: "Vending machine not found !",
            AlreadyExists: "Vending machine already exists !",
        }
    },

    Workout: {
        SuccessMessage: {
            Create: "Workout created successfully !",
            Update: "Workout updated successfully !",
            Delete: "Workout deleted successfully !",
            Fetch: "Workout fetched successfully !"

        },
        FailureMessage: {
            Create: "Workout creation failed, kindly retry !",
            Update: "Workout updation failed, kindly retry !",
            Delete: "Workout deletion failed, kindly retry !",
            NotFound: "Workout videos not found !",
            IdNotFound: "Workout id is missing !",
            AlreadyExists: "Workout already exists !",
        }
    },

    Cart: {
        SuccessMessage: {
            Create: "Cart created successfully !",
            Update: "Cart updated successfully !",
            Delete: "Cart deleted successfully !",
            Fetch: "Cart fetched successfully !"

        },
        FailureMessage: {
            Create: "Cart creation failed, kindly retry !",
            Update: "Cart updation failed, kindly retry !",
            Delete: "Cart deletion failed, kindly retry !",
            NotFound: "Cart not found !",
            IdNotFound: "Cart id is missing !",
            AlreadyExists: "Cart already exists !",
        }
    },
    Order: {
        SuccessMessage: {
            Create: "Order created successfully !",
            Update: "Order updated successfully !",
            Cancel: "Order cancelled successfully !",

            Delete: "Order deleted successfully !",
            Fetch: "Order fetched successfully !"

        },
        FailureMessage: {
            Create: "Order creation failed, kindly retry !",
            Update: "Order updation failed, kindly retry !",
            Delete: "Order deletion failed, kindly retry !",
            NotFound: "Order videos not found !",
            IdNotFound: "Order id is missing !",
            AlreadyExists: "Order already exists !",
        }
    },
    Coupon: {
        SuccessMessage: {
            Create: "Coupon created successfully !",
            Update: "Coupon updated successfully !",
            Delete: "Coupon deleted successfully !",
            Fetch: "Coupon fetched successfully !"

        },
        FailureMessage: {
            Create: "Coupon creation failed, kindly retry !",
            Update: "Coupon updation failed, kindly retry !",
            Delete: "Coupon deletion failed, kindly retry !",
            NotFound: "Coupon videos not found !",
            IdNotFound: "Coupon id is missing !",
            AlreadyExists: "Coupon already exists !",
        }
    },
    Dashboard: {
        SuccessMessage: {
            Fetch: "Dashboard fetched successfully !"
        },
        FailureMessage: {
            NotFound: "Dashboard not found !",
        }
    },
    BankAccount: {
        SuccessMessage: {
            Create: "Bank account created successfully !",
            Update: "Bank account updated successfully !",
            Delete: "Bank account deleted successfully !",
            Fetch: "Bank account fetched successfully !"

        },
        FailureMessage: {
            Create: "Bank account creation failed, kindly retry !",
            Update: "Bank account updation failed, kindly retry !",
            Delete: "Bank account deletion failed, kindly retry !",
            NotFound: "Bank account videos not found !",
            IdNotFound: "Bank account id is missing !",
            AlreadyExists: "Bank account already exists !",
        }
    },


    Log: {
        SuccessMessage: {
            Create: "Logs created successfully !",
            Update: "Logs updated successfully !",
            Delete: "Logs deleted successfully !",
            Fetch: "Logs fetched successfully !"

        },
        FailureMessage: {
            Create: "Logs creation failed, kindly retry !",
            Update: "Logs updation failed, kindly retry !",
            Delete: "Logs deletion failed, kindly retry !",
            NotFound: "Logs not found !",
        }
    },
    Validation: {
        FailureMessage: {
            DataTypeError(data, type) { return `${data} must be ${type}` },
            Requied(data) { return `${data} is required` },
            Contain(data) { return `must contain a ${data}` },
            Password: "Password must be atleast 6-20 characters"
        }
    },
    ProductManagement: {
        SuccessMessage: {
            Create: "Product created successfully !",
            Update: "Product updated successfully !",
            Delete: "Product deleted successfully !",
            Fetch: "Product fetched successfully !"

        },
        FailureMessage: {
            Create: "Product creation failed, kindly retry !",
            Update: "Product updation failed, kindly retry !",
            Delete: "Product deletion failed, kindly retry !",
            NotFound: "Product not found !",
            AlreadyExists: "Product already exists !",
        }
    },
    RefillAgentManagement: {
        SuccessMessage: {
            Create: "Refille agent task created successfully !",
            Update: "Refille agent task updated successfully !",
            Delete: "Refille agent task deleted successfully !",
            Fetch: "Refille agent task fetched successfully !"

        },
        FailureMessage: {
            Create: "Refille agent task creation failed, kindly retry !",
            Update: "Refille agent task updation failed, kindly retry !",
            Delete: "Refille agent task deletion failed, kindly retry !",
            NotFound: "Refille agent task not found !",
            AlreadyExists: "Refille agent task already exists !",
        }
    }
}

