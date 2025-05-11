import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface GuildType extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    guildId: string;
}

const guildSchema = new Schema<GuildType>(
    {
        guildId: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export const Guild = mongoose.model<GuildType>("guild", guildSchema);
