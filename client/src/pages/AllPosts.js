import { Fragment } from 'react';
import PostList from "../components/posts/PostList";
import {Viewer} from "@toast-ui/react-editor";

const AllPosts = () => {
    const header = `# Postのリストです！`
    const Dummy = [
        {id: "1", url: "url1", title: "title1", text: "Text1"},
        {id: "2", url: "url2", title: "title2", text: "Text2"},
        {id: "3", url: "url3", title: "title3", text: "Text3"},
        {id: "4", url: "url4", title: "title4", text: "Text4"},
        {id: "5", url: "url5", title: "title5", text: "Text5"},
        {id: "6", url: "url6", title: "title6", text: "Text6"},
    ];

    return (
        <Fragment>
            <Viewer
                initialValue={header}
            />
            <PostList posts={Dummy}/>
        </Fragment>
    )
}

export default AllPosts
