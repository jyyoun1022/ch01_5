import type {FC, ReactNode} from 'react';

// FC 타입은 import type 구문을 사용하지만,
// Component 클래스는 단순히 import 구문을 사용하고 있다.

// 타입스크릡트에서 타입은 자바스크립트로 컴파일할 때만 필요한 정보이다.
// 컴파일한후 자바스크립트 코드에서는 타입 관련내용이 완전히 제거 된다.

// 반면에 클래스는 물리적으로 동작하는 메서드와 속성이있으므로 자바스크립트 코드로 변환돼도
// 컴파일 된 형태로 그대로 남는다.

// 따라서 앞 코드의 FC는 컴파일되면 완전히 사라지는 정보이므로 import type 구문을 사용한다.
export type PProps = {
  children?: ReactNode
}

const P: FC<PProps> = props => {
  const {children} = props
  return <p children={children} />
}

export default P;