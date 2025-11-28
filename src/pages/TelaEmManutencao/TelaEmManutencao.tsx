import { Stack, Typography } from "@mui/material"
import * as Styled from "./TelaEmManutencao.styled"
import { BackGroud } from "../../assets"
import { TriangleAlert } from "lucide-react"
import { Button } from "../../components/Button/Button"

export const TelaEmManutencao = () => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Stack className="fundo">
                    <BackGroud
                        width="90%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                    />
                </Stack>
                <Styled.EmManutencaoBox>
                    <Stack className="errorIcon">
                        <TriangleAlert
                            size={110}
                            color={"#064B72"}
                        />
                    </Stack>
                    <Typography variant="h5">
                        Plataforma em Manutenção
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: "center" }}>
                        No momento, estamos realizando melhorias na plataforma para
                        oferecer uma experiência ainda melhor para você. Em breve, estaremos de volta.
                    </Typography>
                    <Button
                        tamanho={"md"}
                        variante="ButtonBlue"
                        sx={{ width: "auto", paddingInline: 1.5 }}
                        to="/plataforma-nexus"
                        viewTransition
                    >
                        Voltar à plataforma
                    </Button>
                </Styled.EmManutencaoBox>
            </Styled.Content>
        </Styled.Container>
    )
}
