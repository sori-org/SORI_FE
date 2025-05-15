import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

function StoreCardSkeleton() {
    return (
        <SkeletonWrapper>
            <Skeleton
                baseColor="#e0e0e0"
                highlightColor="#f5f5f5"
                height={50}
                width="100%"
                style={{ borderRadius: "15px" }}
            />
        </SkeletonWrapper>
    );
}

export default StoreCardSkeleton;

const SkeletonWrapper = styled.div`
    width: 100%;
`;
