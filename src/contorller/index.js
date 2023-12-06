const Entities = require("../model/entities");
const VigieScan = require("../model/vigie_scans");

const getCodeData = async (req, res) => {
    try {
        let { code } = req.query;
        if (!code) {
            return res.send({
                status: false,
                message: "please send code",
                data: null
            })
        }

        let row = await VigieScan.findAll({
            where: { EntityCode: code },
            include: [{
                model: Entities,
                as: 'entity'
            }],
            order: [['created','desc']],
            offset: 0,
            limit: 5
        })
        res.send({
            status: true,
            message: "Data get successfully",
            data: row
        })
    } catch (error) {
        res.send({
            status: false,
            message: error.message,
            data: null
        })
    }
}

module.exports = getCodeData;