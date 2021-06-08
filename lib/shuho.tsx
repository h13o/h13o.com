import fs from 'fs'
import matter from 'gray-matter'

export function getAllShuhoIds() {
    const years = ["2021", "2022", "2023", "2024", "2025", "2026"]
    const result = years.flatMap(year => getYearShuhoIds(year));
    return result;
}

const getYearShuhoIds = (year: string) => {
    const shuhoDir = "./shuho/" + year
    try {
        const fileNames = fs.readdirSync(shuhoDir)
        return fileNames.map(fileName => {
            return {
                params: {
                    year: year,
                    id: fileName.replace(/\.md$/, '')
                }
            }
        })
    } catch (err) {
        return []
    }
}
export const getShuhoData = (params) => {
    const fullPath = "./shuho/" + params.year + "/" + params.id + ".md"
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return {
        data, content
    }
}