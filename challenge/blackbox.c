#include <stdio.h>
#include <string.h>

void reveal_flag(void)
{
    printf("\nAccess granted.\n");
    printf("Flag: TECH{reverse_the_blackbox}\n");
}

int check_key(const char *key)
{
    const char *part1 = "B1";
    const char *part2 = "4C";
    const char *part3 = "K7";

    char expected[16];

    strcpy(expected, part1);
    strcat(expected, part2);
    strcat(expected, part3);

    return strcmp(key, expected) == 0;
}

int main(void)
{
    char key[64];

    printf("=================================\n");
    printf("        BLACKBOX LICENSE\n");
    printf("=================================\n\n");

    printf("Enter license key: ");
    scanf("%63s", key);

    if (check_key(key))
    {
        reveal_flag();
    }
    else
    {
        printf("\nAccess denied.\n");
        printf("Invalid license key.\n");
    }

    return 0;
}