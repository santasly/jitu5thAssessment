import Joi from "joi";

export const validateNote = (req: Request, res: Response, next: () => void) => {
    const schema = Joi.object({
       title: Joi.string().min(3).required(),
       description: Joi.string().min(10).required(),
    });
   
    const { error, value } = schema.validate(req.body);
   
    if (error) {
       return res.status(400).json({ message: error.details[0].message });
    }
   
    req.body = value;
    next();
   };