// main index.js

// import { requireNativeComponent } from 'react-native';

// const SnapkitCustomCamera = requireNativeComponent('SnapkitCustomCamera', null);

// export default SnapkitCustomCamera;




import { requireNativeComponent, View } from 'react-native';

const settings:any = {
    name: 'SnapkitCustomCamera',
    propTypes: {
         ...View.propTypes,
    },
};



export default requireNativeComponent('SnapkitCustomCamera', settings);