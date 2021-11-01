// implement whatever guid genertator you want
export default function generateGuid(): string {
    return `my-${Math.random()}-guid-${Math.random()}-unique-${Math.random()}`;
}