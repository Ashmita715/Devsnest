const updatePlace = (place) => {
    return {
        type: "UPDATE_PLACE",
        payload: place,
    };
};

const updatePlaceData = (place) => {
    return (dispatch) => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=68fd876e9daa48e584d115527212908&q=${place}`)
      .then((res) => res.json())
      .then((data)=>{
          console.log(data);
          dispatch({
              type: "UPDATE_PLACE_DATA",
              payload: data,
          });
      });
    }
};

const toggleTheme = () => {
    return {
        type: "TOGGLE_THEME",
    };
};

export {updatePlace, updatePlaceData, toggleTheme};

