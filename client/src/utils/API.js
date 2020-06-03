import axios from "axios";

export default {
  // Gets all books
  // getMaps: function () {
  //   return axios.get(
  //     `https:api.earth911.com/earth911.searchLocations?api_key=7827591ea2eb59e9&latitude=48.8583701&longitude=2.2922926`
  //   );
  // },
  getMaps: function (latitude=48.8583701,longitude=2.2922926) {
    console.log(latitude, longitude);
    return axios.get(
      `https:api.earth911.com/earth911.searchLocations?api_key=7827591ea2eb59e9&latitude=${latitude}&longitude=${longitude}`
    );
  },  
  getMaterial: function (topic) {
    return axios.get(
      `https://api.earth911.com/earth911.searchMaterials?api_key=7827591ea2eb59e9&query=${topic}`
    );
  },
  // getID: function (materialIds) {
  //   return axios.get(
  //     `https:api.earth911.com/earth911.searchLocations?api_key=7827591ea2eb59e9&latitude=39.742043&longitude=-104.991531&${materialIds
  //       .map((materialId) => "material_id[]=" + materialId + "&")
  //       .join("")}`
  //   );
  // },
  getID: function (materialIds, latitude=39.742043, longitude=-104.991531) {
    return axios.get(
      `https:api.earth911.com/earth911.searchLocations?api_key=7827591ea2eb59e9&latitude=${latitude}&longitude=${longitude}&${materialIds
        .map((materialId) => "material_id[]=" + materialId + "&")
        .join("")}`
    );
  },  
  getSave: function (point) {
    console.log(point);
    axios({
      method: "post",
      url: "/api/users/fav",
      data: {
        favorite: point,
      },
    });
  },
  getAddress: async function(latitude, longitude) {
    return await axios.get(
      `https://us1.locationiq.com/v1/reverse.php?key=ec3dca5fbce16a&lat=${latitude}&lon=${longitude}&format=json`
    );
  }
};
//Users.findOneAndUpdate({_id: req.user.id}, {$push: {favorites: req.body}});
//};
