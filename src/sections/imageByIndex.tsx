
import { graduate, kupu2, sololight, ttpetronas, termenung, batuputih } from "../assets/gallery"
export const images: string[] = [sololight, kupu2, batuputih, ttpetronas, graduate, termenung]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex