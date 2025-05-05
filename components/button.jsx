import { TouchableOpacity, Text } from "react-native";
import COLORS from "../constants/Colors";



const Button = ({action}) => {
    // const router = useRouter();
    return (
        <TouchableOpacity style = {{backgroundColor: COLORS.black, justifyContent: 'center', height: 60, borderRadius: 40, marginTop: 30}}
            onPress={action}
        >
            <Text style = {{fontFamily: 'PoppinsSemiBold', fontSize: 19, color: 'white', textAlign: 'center'}}>
                LOG IN
            </Text>
        </TouchableOpacity>
    )
}

export default Button;