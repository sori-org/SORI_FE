import useFormStore from "../../../store/useFormStore.js"
import Sori from "../../../assets/sori1.svg"
import styled from "styled-components"
import useSelectHandler from "../../../hooks/useSelectHandler.js"
import PostButton from "../PostButton.jsx"
import { Baby, GraduationCap, Users, Award } from 'lucide-react'

const AgeIcons = {
    "10-20": Baby,
    "20-30": GraduationCap,
    "30-40": Users,
    "40+": Award
}

const options = [
    {
        title: "10~20세",
        value: "10-20",
        IconComponent: AgeIcons["10-20"]
    },
    {
        title: "20~30세",
        value: "20-30",
        IconComponent: AgeIcons["20-30"]
    },
    {
        title: "30~40세",
        value: "30-40",
        IconComponent: AgeIcons["30-40"]
    },
    {
        title: "40세 이상",
        value: "40+",
        IconComponent: AgeIcons["40+"]
    },
]

function StepSeven() {
    const { formData } = useFormStore()
    const handleSelect = useSelectHandler("age_range_target")

    return (
        <Container>
            <Image src={Sori || "/placeholder.svg"} alt="소리 캐릭터" />
            <Title>타겟 연령대를 선택해주세요</Title>
            <ButtonSection>
                {options.map((option) => (
                    <PostButton
                        key={option.title}
                        title={option.title}
                        icon={<option.IconComponent size={24} color="#FFFFFF" />}
                        isSelected={formData.age_range_target === option.value}
                        onClick={() => handleSelect(option.value)}
                        size="small"
                    />
                ))}
            </ButtonSection>
        </Container>
    )
}

export default StepSeven

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
`

const ButtonSection = styled.div`
    width: 85%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    column-gap: 15px;
    padding-top: 3rem;
    justify-items: center;
`

const Image = styled.img`
    object-fit: contain;
`

const Title = styled.h1`
    font-size: 23px;
    font-weight: 600;
    text-align: center;
    width: 100%;
    padding-top: 3rem;
`
