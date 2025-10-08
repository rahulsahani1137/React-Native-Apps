import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import post from "../../../../assets/data/posts.json"
import PostListItem from '../../../components/PostListItem';

const DetailedPost = () => {
    const { id } = useLocalSearchParams();

    const detailedPost = post.find((post) => post.id === id);
    
    if(!detailedPost) {
        return (
            <Text>Post Not Found</Text>
        )
    }

    return (
        <View>
            <PostListItem post={detailedPost} isDetailedPost />
        </View>
    )
}

export default DetailedPost

const styles = StyleSheet.create({})