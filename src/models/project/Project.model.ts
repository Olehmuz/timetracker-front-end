export interface IProjectModel {
	"_id": string,
	"projectName": string,
	"projectDescription": string,
	"salary": {
		"junior": number,
		"middle": number,
		"senior": number
	},
} 