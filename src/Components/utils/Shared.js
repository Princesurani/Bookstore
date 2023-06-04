import { Role, RoutePaths } from "./enum";

const messages = {
    BOOK_DELETE: "Are you sure you want to delete this book?",
    USER_DELETE: "are you sure you want to delete the user?",
    CATEGORY_DELETE: "are you sure you want to delete this category?",
    UPDATED_SUCCESS: "Record updated successfully",
    UPDATED_FAIL: "Record cannot be updated",
    DELETE_SUCCESS: "Record deleted successfully",
    DELETE_FAIL: "Record cannot be deleted",
    ORDER_SUCCESS: "Your order is successfully placed",
};

const localStorageKeys = {
    USER: "user",
};

const NavigationItems = [
    {
        name: "Users",
        route: RoutePaths.user,
        access: [Role.Admin, Role.Seller],
    },
    {
        name: "Categories",
        route: RoutePaths.category,
        access: [Role.Admin,Role.Seller],
    },
    {
        name: "Books",
        route: RoutePaths.book,
        access: [Role.Admin, Role.Seller],
    },
    {
        name: "UpdateProfile",
        route: RoutePaths.updateprofile,
        access: [Role.Admin, Role.Seller, Role.Buyer],
    },
];

const hasAccess = (pathname, user) => {
  const navItem = NavigationItems.find((x) => pathname.includes(x.route));
  if (navItem) {
    return (
      !navItem.access ||
      !!(navItem.access && navItem.access.includes(user.roleId))
    );
  }
  return true;
};


export default {
    messages,
    hasAccess,
    localStorageKeys,
    NavigationItems,
};