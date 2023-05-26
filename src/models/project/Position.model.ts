export interface IPositionModel {
	"_id": string,
	"positionName": string,
	"positionDescription": string,
	"salary": {
		"junior": number,
		"middle": number,
		"senior": number
	},
}