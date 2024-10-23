import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, IconButton, styled } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import InstagramIcon from '@mui/icons-material/Instagram';

export interface SocialCardProps {
    /**
     * Image URL for the post
     */
    imageUrl: string;
    /**
     * Account name
     */
    accountName: string;
    /**
     * Number of likes
     */
    likes?: number;
    /**
     * Number of comments
     */
    comments?: number;
    /**
     * Alt text for the image
     */
    imageAlt?: string;
    /**
     * Card width
     */
    width?: number | string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: theme.spacing(2),
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
}));

const AccountBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(2),
}));

const StatsBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    padding: `0 ${theme.spacing(2)}`,
}));

const StatItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    color: theme.palette.text.secondary,
}));

export const SocialCard: React.FC<SocialCardProps> = ({
                                                          imageUrl,
                                                          accountName,
                                                          likes = 0,
                                                          comments = 0,
                                                          imageAlt = "Post image",
                                                          width = 360,
                                                          onClick,
                                                      }) => {
    const formatNumber = (num: number): string => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    };

    return (
        <StyledCard sx={{ width }} onClick={onClick}>
            <AccountBox>
                <InstagramIcon />
                <Typography variant="subtitle1" fontWeight="medium">
                    {accountName}
                </Typography>
            </AccountBox>

            <CardMedia
                component="img"
                image={imageUrl}
                alt={imageAlt}
                sx={{
                    aspectRatio: '1',
                    objectFit: 'cover',
                }}
            />

            <CardContent sx={{ pb: 2 }}>
                <StatsBox>
                    <StatItem>
                        <IconButton size="small" color="default">
                            <FavoriteIcon fontSize="small" />
                        </IconButton>
                        <Typography variant="body2">
                            {formatNumber(likes)}
                        </Typography>
                    </StatItem>

                    <StatItem>
                        <IconButton size="small" color="default">
                            <ChatBubbleOutlineIcon fontSize="small" />
                        </IconButton>
                        <Typography variant="body2">
                            {formatNumber(comments)}
                        </Typography>
                    </StatItem>
                </StatsBox>
            </CardContent>
        </StyledCard>
    );
};