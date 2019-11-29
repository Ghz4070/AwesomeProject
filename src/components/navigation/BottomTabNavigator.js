import { createBottomTabNavigator } from 'react-navigation-tabs';
import Liste from '../../screens/Listes';
import Map from '../../screens/Map';

const BottomTabNavigator = createBottomTabNavigator(
    {
        Liste: Liste,
        Carte: Map,
    },
);

export default BottomTabNavigator;