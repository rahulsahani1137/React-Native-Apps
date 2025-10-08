import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostListItem from '../../../components/PostListItem';
import posts from '../../../../assets/data/posts.json'

const HomeScreen = () => {
    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <PostListItem post={item} />}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})