import fs from 'fs'
import matter from 'gray-matter'
import moment from "moment"

const years = ["2021", "2022", "2023", "2024", "2025", "2026"]

export function getAllShuhoIds() {
    const result = years.flatMap(year => getYearShuhoIds(year));
    return result;
}

const getYearShuhoIds = (year: string) => {
    const shuhoDir = "./shuho/" + year
    try {
        const fileNames = fs.readdirSync(shuhoDir)
        return fileNames.map(fileName => {
            const params = {
                year: year,
                id: fileName.replace(/\.md$/, '')
            };
            return {
                params,
            }
        })
    } catch (err) {
        return []
    }
}
const getYearShuhoData = (year: string) => {
    const shuhoDir = "./shuho/" + year
    try {
        const fileNames = fs.readdirSync(shuhoDir)
        return fileNames.map(fileName => {
            const params = {
                year: year,
                id: fileName.replace(/\.md$/, '')
            };
            return {
                ...getShuhoData(params)
            }
        })
    } catch (err) {
        return []
    }
}
export const getAllShuhoData = () => {
    return years.flatMap(year => getYearShuhoData(year)).reverse();
}

export const getShuhoData = (params) => {
    const m = moment(params.year + params.id, "YYYYMM-DD");
    const fullPath = "./shuho/" + params.year + "/" + params.id + ".md"
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const topics = content
        .toString()
        .match(/^###\s.*$/gm)
        .map((s) => s.replace(/^###\s*/, ''))
    console.log(topics);
    return {
        data,
        content,
        topics,
        start: m.startOf('isoWeek').format("M/D"),
        end: m.endOf('isoWeek').format("M/D"),
        url: fullPath.substr(2).replace(".md", "")
    }
}