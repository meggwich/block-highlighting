import Video from "./Video";
import Article from "./Article";
import WithPopularity from "./WithPopularity";

interface ListProps {
    list: { type: string; title?: string; url?: string; views: number }[];
}

function List(props: ListProps) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <WithPopularity viewCount={item.views}>
                        <Video {...item} url={item.url || 'Unlinked'}/>
                    </WithPopularity>
                );

            case 'article':
                return (
                    <WithPopularity viewCount={item.views}>
                        <Article {...item} title={item.title || 'Untitled'}/>
                    </WithPopularity>
                );
        }
    });
};

export default List;