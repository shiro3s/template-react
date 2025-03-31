import {styled} from "@kuma-ui/core";
import { InputText } from "@/components/common/input-text";
import { Textarea } from "@/components/common/textarea";

import {useMemoForm} from "./useMemoForm"

type Props = {
  title: string
}

export const MemoForm: React.FC<Props> = ({
  title
}) => {
  const {register, handleSubmit} = useMemoForm()

  return (
    <Container onSubmit={handleSubmit((v) => console.log(v))}>
      <Title>{title}</Title>

      <Field>
        <InputText 
          placeholder="title" 
          register={register("title")} 
        />
      </Field>

      <Field>
        <Textarea 
          placeholder="content" 
          register={register("content")} 
        />
      </Field>
    </Container>
  )
}

const Container = styled.form`
  max-width: 812px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 24px;
  margin: 0 0 1.5rem;
`;

const Field = styled.div`
  margin-bottom: 20px;
`;