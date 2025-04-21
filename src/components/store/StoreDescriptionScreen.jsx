import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TipIcon from "../../assets/img_tip.svg";
import SoriImg from "../../assets/img_register.svg";
import { useRegisterStore } from "../../hooks/mutation/useRegisterStore.js";
import { useUserStore } from "../../store/useUserStore.js";
import {getUser} from "../../apis/user/getUser.js";

function StoreDescriptionScreen() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const prevStoreData = location.state || {};
    const { mutate, isPending } = useRegisterStore();
    const { user, setUser } = useUserStore();

    useEffect(() => {
        if (!prevStoreData.store_name) {
            alert("가게 등록 정보를 먼저 입력해주세요.");
            navigate("/register");
        }
    }, [prevStoreData, navigate]);

    const onSubmit = (data) => {
        const storeData = {
            user_id: user.user_id,
            ...prevStoreData,
            store_description: data.store_description,
        };

        mutate(storeData, {
            onSuccess: async () => {
                try {
                    await new Promise((res) => setTimeout(res, 500)); // 잠깐 딜레이
                    const userInfo = await getUser();
                    setUser(userInfo);
                    navigate("/home");
                } catch (e) {
                    console.error("등록 후 유저 정보 갱신 실패", e);
                    navigate("/home");
                }
            },
            onError: (error) => {
                console.log(storeData);
                console.error("StoreDescriptionScreen.jsx에서 최종 등록 시:\n등록 실패:", error);
                alert("등록에 실패했어요. 다시 시도해주세요.");
            },
        });
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <Icon src={SoriImg} alt="소리 이미지" />
            <Title>
                <Highlight>소리</Highlight>에서 사용할<br />가게에 대한 설명을 적어주세요
            </Title>

            <Input
                as="textarea"
                {...register("store_description", { required: true })}
                placeholder="가게에 대한 설명을 적어주세요!"
            />

            <TipBox>
                <TipHeader>
                    <img src={TipIcon} alt="tip" width={18} height={18} /> TIP
                </TipHeader>
                <TipContent>
                    설명을 구체적이고 자세하게 적을수록, 생성되는 게시물의 품질과 정확도가 훨씬 높아져요!<br /><br />
                    우리 가게는 분위기가 좋고 맛있습니다 (X)<br /><br />
                    (가게 이름)는 따뜻한 조명과 편안한 우드톤 인테리어로 구성되어 있어 친구, 연인, 가족 모두 편안하게 머무를 수 있는 공간입니다. 대표 메뉴인 수제 치즈감자는 매일 아침 공수한
                    신선한 재료로 만들며, 바삭한 감자튀김과 직접 만든 특제 소스가 곁들여져 많은 분들이 좋아하십니다. 특히 주말에는 브런치 세트가 인기 있으며, 커피는 원두를 직접 로스팅해
                    풍미가 깊습니다!(O)<br /><br />
                    가게의 분위기, 인기 메뉴, 재료의 특징, 고객 반응, 특별한 서비스를 구체적으로 설명해 주시면 AI가 더 정확하고 매력적인 게시글을 만들어드릴 수 있어요.
                </TipContent>
            </TipBox>

            <SubmitButton type="submit" disabled={isPending}> {isPending ? "등록 중..." : "등록하기"} </SubmitButton>
        </Container>
    );
}

export default StoreDescriptionScreen;

const Container = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 2rem;
    gap: 1.5rem;
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    line-height: 2rem;
`;

const Highlight = styled.span`
    color: #49c48f;
    font-size: 1.6rem;
`;

const Input = styled.textarea`
    padding: 1rem;
    font-size: 0.9rem;
    border: none;
    resize: none;
    height: 10vh;

    ::placeholder {
        color: #bbb;
    }
`;

const Icon = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin: 0 auto;
`;

const TipBox = styled.div`
    background: #e9f9f2;
    border-radius: 16px;
    padding: 1rem;
    font-size: 0.9rem;
    color: #444;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
`;

const TipHeader = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 1rem;
    gap: 0.5rem;
    color: #49c48f;
`;

const TipContent = styled.div`
    line-height: 1.5;
`;

const SubmitButton = styled.button`
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #49c48f;
    border: none;
    border-radius: 12px;
    cursor: pointer;

    &:hover {
        background-color: #3ca377;
    }
`;
